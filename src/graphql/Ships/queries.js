export const Ships = `
query Ships($limit:Int, $offset:Int){
  ships(limit: $limit, offset: $offset) {
    abs
    active
    attempted_landings
    course_deg
    home_port
  }
}
`