import React from 'react';

export class SaleForm extends React.Component {
  render() {
    return (
        <div className='saleForm'>
          <h2>Sales</h2>
          <p>135</p>
          <table className='saleTable'>
            <tr><td>Hoodie</td><td>$74.00</td></tr>
            <tr><td>Fitted Cap</td><td>$69.50</td></tr>
            <tr><td>Bracelet</td><td>$39.05</td></tr>
          </table>
        </div>
    );
  }
}