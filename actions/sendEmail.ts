"use server"

import React from "react"
import { Resend } from "resend"
import { validateString, getErrorMessage } from "@/lib/utils"
import ContactFormEmail from "@/email/contactFormEmail"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    }
  }
  // const response = await fetch('/api/sendEmail', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(formData),
  // })
  // return response.json()
  if (!message || typeof message != "string") {
    return {
      error: "Ivalid Message"
    }
  }
  
  let data
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'sanghelgonzalez@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      // text: message
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      })
    })
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }

  return { data }

}