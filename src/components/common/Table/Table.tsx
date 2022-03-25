import React, { useEffect, useState } from 'react';
import { uniqueId } from 'lodash';

import styles from './Table.module.scss';

type TableProps = {
  headings: string[];
  data: string[][];
};

type SortMethodType = 'desc' | 'asc';

const Table: React.FC<TableProps> = ({ headings, data }) => {
  const [sorted, setSorted] = useState<string[][]>(data);
  const [sortMethod, setSortMethod] = useState<SortMethodType[]>([]);

  useEffect(() => {
    const bufferSortMethod: SortMethodType[] = [];

    headings.forEach(() => {
      bufferSortMethod.push('asc');
    });

    setSortMethod(bufferSortMethod);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headingHandler = (index: number) => {
    const bufferSortMethod = sortMethod.slice();

    bufferSortMethod[index] = bufferSortMethod[index] === 'asc' ? 'desc' : 'asc';

    setSortMethod(bufferSortMethod);

    setSorted(
      data.slice().sort((a, b): number => {
        const num1 = Number(a[index]);
        const num2 = Number(b[index]);

        if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
          return sortMethod[index] === 'asc' ? num1 - num2 : num2 - num1;
        }

        return sortMethod[index] === 'asc'
          ? a[index].localeCompare(b[index])
          : b[index].localeCompare(a[index]);
      }),
    );
  };

  return (
    <table className={styles.component}>
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th key={uniqueId()} onClick={() => headingHandler(index)}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {sorted.map((row) => (
          <tr key={uniqueId()}>
            {row.map((column) => (
              <td key={uniqueId()}>{column}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
