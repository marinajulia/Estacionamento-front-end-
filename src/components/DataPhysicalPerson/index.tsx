import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container } from "./styles";

export function DataPhysicalPerson(){
    return (
        <Container>
            <Card style={{ maxWidth: 345 }}>
            <div className="block"></div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Pessoa Física
                </Typography>
                <Typography variant="body2" style={{ color: "text.secondary" }}>
                1234 registros
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Ver mais</Button>
            </CardActions>
            </Card>
        </Container>
      );
}