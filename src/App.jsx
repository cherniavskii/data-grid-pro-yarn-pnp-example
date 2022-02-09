import { DataGridPro } from '@mui/x-data-grid-pro';

function App() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <DataGridPro rows={[
        { id: 1, label: 'One' },
        { id: 2, label: 'Two' },
      ]}
      columns={[
        { field: 'id'},
        { field: 'label'},
      ]}
      />
    </div>
  )
}

export default App
