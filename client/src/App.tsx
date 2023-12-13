import { useState } from 'react';
import './App.css';
import { Card, Table } from 'antd';
import ScoreTable from './components/Tables/ScoreTable';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Card title="Financial Scores">
      <ScoreInput />
      <ScoreTable />
    </Card>
  );
}

export default App;
