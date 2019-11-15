import Api from './api';

const NotesService = {
  index: () => Api.get('/notes', {
    headers: {'x-access-token': localStorage.getItem('token') }
  }),
  create: () => Api.post('/notes', {'title': 'Nova nota', 'body': 'Nova nota...' }, {
    headers: {'x-access-token': localStorage.getItem('token') }
  })
}

export default NotesService;