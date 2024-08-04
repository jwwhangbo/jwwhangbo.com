import { Card, CardContent } from "@mui/material"

export const ProjectSkeleton = () => {
    return (
      <div className="flex h-fit w-full animate-pulse">
        <div className="w-[10%]"></div>
        <Card variant="elevation" elevation={2}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "80%",
              width: "100%",
              justifyContent: "top",
              gap: "2em",
              marginTop: "2%",
            }}
          >
            <div className="w-3/5 h-4 bg-white rounded-lg"></div>
            <div className="w-3/5 h-4 bg-white rounded-lg"></div>
            <div className="w-3/5 h-4 bg-white rounded-lg"></div>
            <div className="h-1/2 bg-white rounded-lg"></div>
          </CardContent>
        </Card>
        <div className="w-[10%]"></div>
      </div>
    );
}