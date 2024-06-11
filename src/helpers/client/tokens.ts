import jwt, { type JwtPayload } from 'jsonwebtoken';

const DEFAULT_SIGN_OPTIONS: SignOptions = {
  expiresIn: '1h',
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOptions = DEFAULT_SIGN_OPTIONS,
) {
  const secretKey = process.env.JWT_SECRET!;
  const token = jwt.sign(payload, secretKey, options);

  return token;
}

export function verifyJwt(token: string) {
  try {
    const secretKey = process.env.JWT_SECRET!;
    const decoded = jwt.verify(token, secretKey);

    return decoded as JwtPayload;
  } catch (err: any) {
    console.log(err);
    return null;
  }
}
