import bcrypt from "bcrypt";

export default async function verifyPassword(
  password: string,
  hashedPassword: string
) {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error("Error verifying password:", error);
    throw error;
  }
}
