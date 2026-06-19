import data from './data.json';
import DataItem from './DataItem';

function ListDataTable() {

  
  return (
          <div>
            {data.map((item) => (
            <DataItem product={item} />
            ))}
          </div>); 
}

export default ListDataTable; 