import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/Routes.tsx'
import { AppThemeProvider } from './shared/contexts/ThemeContext.tsx'
import { SideMenu, Topbar } from './shared/components/index.ts'
import { DrawerProvider } from './shared/contexts/DrawerContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <Topbar />
          <SideMenu>
            <AppRoutes />
          </SideMenu>

        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  </StrictMode>
)
