function _createModal(options) {
  const modal = document.createElement('div')
  modal.classList.add('wmodal')
  modal.insertAdjacentHTML('afterbegin', `

  <div class="modal-overlay">
    <div class="modal-window">
      <div class="modal-header">
        <span class="modal-title">Результаты</span>
        <span class="modal-close">&times;</span>
      </div>
      <div class="modal-body">

        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Уровень</th>
              <th scope="col">Знаков в минуту</th>
              <th scope="col">Ошибок</th>
              <th scope="col">Язык</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-danger">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="modal-footer">

      </div>
    </div>
  </div>

  `)
  document.body.appendChild(modal)
  return modal
}

$.modal = function (options) {
  const $modal = _createModal(options)
  return {
    open() {
      $modal.classList.add('open')
    },
    close() {
      $modal.classList.remove('open')
    },
    destroy() {}
  }
}