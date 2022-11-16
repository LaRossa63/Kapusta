import React from 'react';
import styled from 'styled-components';

import { useGetRecordList } from 'hooks';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const Container = styled.div`
  height: 422px;

  margin-top: 25px;
  padding: 20px;

  background: ${(props) => props.theme.background.body};

  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Graph = () => {
  const { currentGraph } = useGetRecordList();

  const data = {
    labels: currentGraph?.map((element) => element.description),
    datasets: [
      {
        label: 'расход',
        data: currentGraph?.map((element) => element.amount),
        backgroundColor: 'rgb(255, 117, 29)',
      },
    ],
  };

  return (
    <>
      <Container>
        <Bar data={data} />
      </Container>
    </>
  );
};
