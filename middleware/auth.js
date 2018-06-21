export const authenticate = (req,res,next) => {
  // Naive auth just to confirm students understand query strings. Never do this!
   const tokens = ['5b1064585f4ab8706d275f90', '5b106458eb1078940f098148', '5b10645824d8a372659ca8cf']
   if (req.query.accessToken && tokens.includes(req.query.accessToken)) {
     next()
   } else {
     res.status(401).send('Error: Invalid or Missing Access Token')
   }
 }