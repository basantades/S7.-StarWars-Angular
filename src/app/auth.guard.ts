import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';
import { map } from 'rxjs/operators';


export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  return authState(auth).pipe(
    map(user => {
      if (user) {
        return true; // Usuario autenticado
      } else {
        // Almacenar la URL original que el usuario intentó acceder
        const redirectUrl = state.url;
        
        // Redirigir al login, pasando la URL de redirección como parámetro
        router.navigate(['/login'], { queryParams: { redirectUrl } });
        return false;
      }
    })
  );
};