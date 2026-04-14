import { AppShell } from '../components/layout/AppShell.tsx'
import { TodoWorkspacePreview } from '../components/todo/TodoWorkspacePreview.tsx'
import { AppProviders } from './providers/AppProviders.tsx'

function App() {
  return (
    <AppProviders>
      <AppShell>
        <TodoWorkspacePreview />
      </AppShell>
    </AppProviders>
  )
}

export default App
