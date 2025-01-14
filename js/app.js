import { data } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  (async function () {
    new Chart(document.getElementById('graph'), {
      type: 'line',
      data: {
        labels: data.map((row) => row.week),
        datasets: [
          {
            label: 'Качество сна',
            data: data.map((row) => row.sleepQuality),
          },
          {
            label: 'Тревожность',
            data: data.map((row) => row.anxiety),
          },
          {
            label: 'Подавленность',
            data: data.map((row) => row.depression),
          },
          {
            label: 'Утомляемость',
            data: data.map((row) => row.fatigue),
          },
          {
            label: 'Негативные переживания',
            data: data.map((row) => row.negativeThoughts),
          },
          {
            label: 'Озабоченность ЖКТ',
            data: data.map((row) => row.gutConcerns),
          },
        ],
      },
    });
  })();
});
