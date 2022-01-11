import { playerFields } from '../../utils/constants';
import { SeeMoreButton, Table, TableRow } from './styled';

const TeamContent = ({
  players,
  buttonVisible,
  highlightField,
  updateRows,
  configSort,
}) => {
  return (
    <>
      <Table>
        <thead>
          <TableRow className="header">
            {playerFields.map((field) => (
              <td key={field} className="col" onClick={() => configSort(field)}>
                {field}
              </td>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {players.map((player) => (
            <TableRow key={player.id} className="row">
              {playerFields.map((field) => (
                <td
                  key={field}
                  className={`col ${highlightField === field && 'highlighted'}`}
                >
                  {player[field]}
                </td>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
      {buttonVisible && (
        <SeeMoreButton onClick={updateRows}>See more</SeeMoreButton>
      )}
    </>
  );
};

export default TeamContent;
