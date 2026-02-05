import { loginschema } from "@/app/schemas/auth.schema";
import * as z from "zod";

export type LoginSchema = z.infer<typeof loginschema>;
