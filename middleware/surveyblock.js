export default function ({ env: { SURVEY_OPENED }, redirect }) {
  if (!SURVEY_OPENED) return redirect('/')
}
