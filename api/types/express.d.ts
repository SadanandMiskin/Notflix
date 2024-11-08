// types/express.d.ts
import { User } from './models/User'; // Import your User type if defined, otherwise use `any`.

declare global {
  namespace Express {
    interface Request {
      user?: User; // or `any` if you don't have a specific User type
    }
  }
}
