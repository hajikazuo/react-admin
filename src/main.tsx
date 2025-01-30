import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/Routes.tsx'
import { AppThemeProvider } from './shared/contexts/ThemeContext.tsx'
import { SideMenu } from './shared/components/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <BrowserRouter>

        <SideMenu>
          <AppRoutes />
        </SideMenu>

      </BrowserRouter>
    </AppThemeProvider>
  </StrictMode>
)
