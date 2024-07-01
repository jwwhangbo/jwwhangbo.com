import { Paper, TextField } from "@mui/material";

const PaperContents = () => {
  return (
    <div className="flex flex-col space-y-4 w-[90%] h-[95%] justify-center ">
      <TextField variant="filled" label="email" />
      <TextField variant="filled" label="content" multiline rows={10}/>
    </div>
  );
};

export default function Contact() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-133px)]">
      <Paper
        elevation={4}
        square={false}
        sx={{ width: 4 / 5, height: 4 / 5, display:"flex", justifyContent:"center" }}
      >
        <PaperContents />
      </Paper>
    </div>
  );
}
