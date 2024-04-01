import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function Deposits(){
    return (
        <>

        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Recent Deposits

            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
        
        </>
    );
}