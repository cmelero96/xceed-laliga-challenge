import { playerFields } from '../../utils/constants';
import { SeeMoreButton, TableRow } from './styled';

const TeamContent = ({
  players,
  buttonVisible,
  highlightField,
  updateRows,
  configSort,
}) => {
  return (
    <>
      <TableRow className="header">
        {playerFields.map((field) => (
          <div key={field} className="col" onClick={() => configSort(field)}>
            {field.toUpperCase()}
          </div>
        ))}
      </TableRow>
      {players.map((player) => (
        <TableRow key={player.id} className="row">
          {playerFields.map((field) => (
            <div
              key={field}
              className={`col ${highlightField === field && 'highlighted'}`}
            >
              {player[field]}
            </div>
          ))}
        </TableRow>
      ))}
      {buttonVisible && (
        <SeeMoreButton onClick={updateRows}>SEE MORE</SeeMoreButton>
      )}
    </>
  );
};

export default TeamContent;
