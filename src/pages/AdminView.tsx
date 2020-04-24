import React, { useEffect, useState } from "react";
import {
  Container,
  TableContent,
  TableHeader,
  Button,
  Badge,
} from "shared/components/Auth/common";
import styled from "styled-components";
import { colors } from "shared/styles";
import { adminQueries } from "shared/amplify-utils/api.utils";
import { useToasts } from "react-toast-notifications";

const AdminViewContainer = styled(Container)`
  flex: 1;
`;

interface User {
  Username: string;
  Attributes: [
    { Name: string; Value: string },
    { Name: string; Value: string },
    { Name: string; Value: string }
  ];
  UserStatus: string;
  Enable: boolean;
  UserCreateDate: string;
  UserLastModifiedDate: string;
}

interface RenderTableProps {
  users: User[];
  onClick: (ev: string) => void;
  disabled: boolean;
  textButton: string;
}

const RenderTable = ({
  users,
  onClick,
  disabled,
  textButton,
}: RenderTableProps) => (
  <>
    <TableHeader>
      <table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email verified</th>
            <th>User Status</th>
            <th>Created at</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
    </TableHeader>
    <TableContent>
      <table cellPadding="0" cellSpacing="0">
        <tbody>
          {users.map((user, key: number) => (
            <tr key={key}>
              <td>{user.Attributes[2].Value}</td>
              <td>
                <Badge
                  color={
                    JSON.parse(user.Attributes[1].Value)
                      ? colors.success
                      : colors.danger
                  }
                >
                  {user.Attributes[1].Value}
                </Badge>
              </td>
              <td>
                <Badge
                  color={
                    user.UserStatus === "CONFIRMED"
                      ? colors.success
                      : colors.warning
                  }
                >
                  {user.UserStatus}
                </Badge>
              </td>
              <td>{user.UserCreateDate}</td>
              <td>
                <Button
                  onClick={() => onClick(user.Attributes[2].Value)}
                  disabled={disabled}
                >
                  {textButton}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContent>
  </>
);

const AdminView = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [allowedUsers, setAllowedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const addUserToGroup = async (username: string) => {
    setLoading(true);
    try {
      const path = "/addUserToGroup";
      await adminQueries.post({ groupname: "users", username }, path);
      addToast("Added Successfully", { appearance: "success" });
    } catch (error) {
      console.log("error", error);
      addToast("Arghhh...", { appearance: "error" });
    } finally {
      setLoading(false);
    }
  };

  const removeUserFromGroup = async (username: string) => {
    setLoading(true);
    try {
      const path = "/removeUserFromGroup";
      await adminQueries.post({ groupname: "users", username }, path);
      addToast("Removed Successfully", { appearance: "success" });
    } catch (error) {
      addToast("Arghhh...", { appearance: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const listUsersInGroup = async (groupname?: string) => {
      const path = groupname ? "/listUsersInGroup" : "/listUsers";
      try {
        const result = await adminQueries.get({ groupname: "users" }, path);
        groupname ? setAllowedUsers(result.Users) : setAllUsers(result.Users);
      } catch (error) {
        console.log("listUsersInGroup error", error);
        addToast("Arghhh...", { appearance: "error" });
      }
    };
    listUsersInGroup();
    listUsersInGroup("users");
  }, [loading, addToast]);

  return (
    <AdminViewContainer>
      <h1>All registered users</h1>
      <RenderTable
        users={allUsers}
        onClick={(username: string) => addUserToGroup(username)}
        textButton={"Allow"}
        disabled={loading}
      />
      <h1>Users allowed to watch</h1>
      <RenderTable
        users={allowedUsers}
        onClick={(username: string) => removeUserFromGroup(username)}
        textButton={"Block"}
        disabled={loading}
      />
    </AdminViewContainer>
  );
};

export default AdminView;
