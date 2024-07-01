import { Card, CardContent, Typography } from "@mui/material";

export default function Projects() {
  const temp: number[] = [1, 2, 3, 4, 5];
  return (
    <div className="flex h-[calc(100vh-133px)] w-fill items-center">
      <div className="flex h-fit w-fill overflow-x-scroll space-x-2">
        {temp.map((i) => {
          return (
            <Card key={i} sx={{ minWidth: 300, height: 500 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
