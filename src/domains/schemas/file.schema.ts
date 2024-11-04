import { z } from "zod";

export const FileSchema = z.instanceof(Blob).refine((file) => file.size > 0, {
  message: "File is required and cannot be empty",
});
