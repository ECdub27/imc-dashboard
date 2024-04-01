import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
    id:number,
    date: string,
    name: string,
    payment:boolean,
    timeForService: number,
){
    return {id, date, name, payment, timeForService};
}

const rows = [
createData(0, '16/09/2021', 'John Doe', true, 30),
createData(1, '17/09/2021', 'Jane Doe', false, 45),
createData(2, '18/09/2021', 'John Smith', true, 60),
createData(3, '19/09/2021', 'Jane Smith', false, 75),
];

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function Orders(){

    return (
        <div>
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Payment</TableCell>
                    <TableCell>Time for Service</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.payment ? 'Paid' : 'Not Paid'}</TableCell>
                        <TableCell>{row.timeForService} mins</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <Link color="primary" href="#" onClick={preventDefault}>
            See More data
            </Link>
            </div>
    );

}