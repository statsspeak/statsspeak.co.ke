export function load({ locals }) {
   return {
        inAdmin: true,
        userSession: locals.userSession
   }
}
