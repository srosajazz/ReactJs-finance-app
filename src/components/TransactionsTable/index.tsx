import {Container} from './styles';

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Guitar</td>
            <td className="withdraw">-U$800</td>
            <td>Fender</td>
            <td>03/22/2022</td>
          </tr>

          <tr>
            <td>Rent</td>
            <td className="withdraw">- U$1.200</td>
            <td>Apartment</td>
            <td>03/12/2022</td>
          </tr>
          <tr>
            <td>Computer</td>
            <td className="Deposit">U$218.000</td>
            <td>Monitor screen</td>
            <td>03/24/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}