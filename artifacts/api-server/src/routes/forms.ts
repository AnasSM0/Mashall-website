import { Router } from "express";
import { db, contactSubmissionsTable, volunteerSubmissionsTable } from "@workspace/db";
import { SubmitContactBody, SubmitVolunteerBody } from "@workspace/api-zod";

const formsRouter = Router();

formsRouter.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request data" });
    return;
  }

  try {
    await db.insert(contactSubmissionsTable).values(parsed.data);
    res.status(201).json({ success: true, message: "Thank you for reaching out. We will get back to you soon." });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact submission");
    res.status(500).json({ error: "Failed to submit form" });
  }
});

formsRouter.post("/volunteer", async (req, res) => {
  const parsed = SubmitVolunteerBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request data" });
    return;
  }

  try {
    await db.insert(volunteerSubmissionsTable).values(parsed.data);
    res.status(201).json({ success: true, message: "Thank you for your interest. Our team will contact you soon." });
  } catch (err) {
    req.log.error({ err }, "Failed to save volunteer submission");
    res.status(500).json({ error: "Failed to submit form" });
  }
});

export default formsRouter;
