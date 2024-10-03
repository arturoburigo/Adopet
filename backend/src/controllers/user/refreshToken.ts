import { Request, Response } from "express";
import { verify, sign } from "jsonwebtoken";

export async function refreshToken(req: Request, res: Response) {
  const token = req.cookies.refreshToken; // Pega o refreshToken do cookie

  if (!token) {
    return res.status(401).json({ message: "Refresh token not found" });
  }

  try {
    const payload = verify(token, process.env.JWT_SECRET as string); // Verifica o refreshToken

    // Gera um novo accessToken
    const newToken = sign({ sub: payload.sub }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      token: newToken,
    });
  } catch (err) {
    return res.status(401).json({ message: "Invalid refresh token" });
  }
}
