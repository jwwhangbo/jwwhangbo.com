'use server'
import fs from 'fs';
import path from 'path';

const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "38fa32d4a75858e9198c6d990b3a3692",
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
    const filePath = path.join(process.cwd(), "public", "projects.json");
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const projects = JSON.parse(fileData);
    return projects;
}

function getTimeline(): Experience[] {
    const filePath = path.join(process.cwd(), "public", "exper.json");
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
      from: "mailtrap@demomailtrap.com", // sender address
      to: "jongwookw@gmail.com", // list of receivers
      subject: `message left on website`, // Subject line
      text: `${name}-${email} says, \n ${message}`, // plain text body
      html: `<html>${name} from ${email} says, <br> ${message}</html>`, // html body
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