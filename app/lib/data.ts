'use server'
import fs from 'fs';
import path from 'path';

const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "31a6f07b8271318f09154ca7de8f8609",
  },
});

export type Project = {
  index: number;
  date: string;
  name: string;
  description?: string;
  language: string;
  framework: string;
  images?: string[];
};

export type Experience = {
    company: string;
    position: string;
    start_date: string;
    end_date: string;
    responsibilities: string[];
};

function getProjects(): Project[] {
    const filePath = path.join(process.cwd(), "projects.json");
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const projects = JSON.parse(fileData);
    return projects;
}

function getTimeline(): Experience[] {
    const filePath = path.join(process.cwd(), "exper.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const timeline = JSON.parse(fileData);
    return timeline;
}

async function sendMessage(formData : FormData) : Promise<string> {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    console.log(name, email, message);
    
    const info = await transport.sendMail({
      from: `${name}-${email}`, // sender address
      to: "jwwhangbo@gmail.com", // list of receivers
      subject: "message left on website", // Subject line
      text: message, // plain text body
      html: `<html>${message}</html>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    return new Promise((resolve, reject) => {
      if (info) {
        resolve('success');
      }
      else {
        reject('fail');
      }
});
}

export { getProjects, getTimeline, sendMessage};