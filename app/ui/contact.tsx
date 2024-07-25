import { Button, Paper, TextField } from "@mui/material";

const PaperContents = () => {
  return (
    <div className="flex flex-col space-y-4 w-[90%] h-[95%] justify-center ">
      <TextField variant="filled" label="email" />
      <TextField variant="filled" label="content" multiline rows={10}/>
      <Button variant="contained">Submit</Button>
    </div>
  );
};

export default function Contact() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-133px)]">
      <Paper
        elevation={4}
        square={false}
        sx={{ width: 370, height: 500, display:"flex", justifyContent:"center" }}
      >
        <PaperContents />
      </Paper>
    </div>
  );
}
