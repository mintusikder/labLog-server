import { createAccessControl } from "better-auth/plugins";

export const statement = {
  user: ["create", "read", "update", "delete"],
  equipment: ["create", "read", "update", "delete"],
} as const;

const ac = createAccessControl(statement);

export const userRole = ac.newRole({
  equipment: ["read", "update"],
});
export const adminRole = ac.newRole({
  user: ["create", "read", "update", "delete"],
  equipment: ["create", "read", "update", "delete"],
});