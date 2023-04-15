import React from "react";
import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Coustomer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amout</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5c21280-31b4-4895-af19-b05728676d89/d9d2omn-a979a884-6bbc-478b-a92f-dff503710cd1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1YzIxMjgwLTMxYjQtNDg5NS1hZjE5LWIwNTcyODY3NmQ4OVwvZDlkMm9tbi1hOTc5YTg4NC02YmJjLTQ3OGItYTkyZi1kZmY1MDM3MTBjZDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f44HL-Si-NlBjhOn2TNUrQ8AaTtQn2t_RmAp2fH3_F4"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5c21280-31b4-4895-af19-b05728676d89/d9d2omn-a979a884-6bbc-478b-a92f-dff503710cd1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1YzIxMjgwLTMxYjQtNDg5NS1hZjE5LWIwNTcyODY3NmQ4OVwvZDlkMm9tbi1hOTc5YTg4NC02YmJjLTQ3OGItYTkyZi1kZmY1MDM3MTBjZDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f44HL-Si-NlBjhOn2TNUrQ8AaTtQn2t_RmAp2fH3_F4"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5c21280-31b4-4895-af19-b05728676d89/d9d2omn-a979a884-6bbc-478b-a92f-dff503710cd1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1YzIxMjgwLTMxYjQtNDg5NS1hZjE5LWIwNTcyODY3NmQ4OVwvZDlkMm9tbi1hOTc5YTg4NC02YmJjLTQ3OGItYTkyZi1kZmY1MDM3MTBjZDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f44HL-Si-NlBjhOn2TNUrQ8AaTtQn2t_RmAp2fH3_F4"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5c21280-31b4-4895-af19-b05728676d89/d9d2omn-a979a884-6bbc-478b-a92f-dff503710cd1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1YzIxMjgwLTMxYjQtNDg5NS1hZjE5LWIwNTcyODY3NmQ4OVwvZDlkMm9tbi1hOTc5YTg4NC02YmJjLTQ3OGItYTkyZi1kZmY1MDM3MTBjZDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f44HL-Si-NlBjhOn2TNUrQ8AaTtQn2t_RmAp2fH3_F4"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5c21280-31b4-4895-af19-b05728676d89/d9d2omn-a979a884-6bbc-478b-a92f-dff503710cd1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1YzIxMjgwLTMxYjQtNDg5NS1hZjE5LWIwNTcyODY3NmQ4OVwvZDlkMm9tbi1hOTc5YTg4NC02YmJjLTQ3OGItYTkyZi1kZmY1MDM3MTBjZDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f44HL-Si-NlBjhOn2TNUrQ8AaTtQn2t_RmAp2fH3_F4"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
