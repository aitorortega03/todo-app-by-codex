import { AppShell } from '../components/layout/AppShell.tsx'
import { TodoWorkspace } from '../components/todo/TodoWorkspace.tsx'
import { AppProviders } from './providers/AppProviders.tsx'

function App() {
  return (
    <AppProviders>
      <AppShell>
        <TodoWorkspace />
      </AppShell>
    </AppProviders>
  )
}

export default App
