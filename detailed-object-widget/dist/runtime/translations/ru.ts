export default {
  _widgetLabel: 'Виджет детальной информации об объекте',
  _widgetDescription: 'Отображает подробную информацию о горнодобывающих объектах',
  
  // Detailed Object Page
  'detailed-object': {
    error_no_id: 'ID объекта отсутствует',
    loading_data: 'Загрузка данных...',
    error_not_found: 'Объект не найден',
    no_data: 'Нет данных',
    
    // Navigation
    info: 'Информация',
    calculate: 'Расчёт',
    docs: 'Документы',
    comments_tab: 'Комментарий',
    info_about_object: 'Информация об объекте',
    calculate_monitoring: 'Расчёт мониторинга',
    docs_history: 'История документов',
    back_to_list: 'Назад к списку',
    delete: 'Удалить',
    delete_error: 'Произошла ошибка при удалении',

    // Comments
    comments_title: 'Комментарии',
    comments_type_label: 'Тип комментария',
    comments_text_label: 'Текст комментария',
    comments_add: 'Добавить комментарий',
    comments_sending: 'Отправка...',
    comments_empty: 'Комментариев пока нет',
    comments_empty_hint: '',
    comments_load_error: 'Не удалось загрузить комментарии',
    comments_send_error: 'Не удалось отправить комментарий',
    comments_text_required: 'Введите текст комментария',
    comments_other_placeholder: 'Введите свой комментарий',
    comments_unknown_type: 'Комментарий',
    comments_unknown_user: 'Пользователь',
    comments_no_image: 'Комментарии недоступны (Не рассчитано)',

    comment_type_1: 'Территория вышла за границу и относится к соседнему месторождению',
    comment_type_2: 'Уточнение топографической карты (неверно — другое месторождение или неверные высоты)',
    comment_type_3: 'В PDF объём есть, но добычные работы не проводились',
    comment_type_4: 'Другое — введите свой комментарий',
    
    // Info
    info_title: 'Информация об участке добычи',
    name: 'Название',
    company_name: 'Наименование компании',
    owner_tin: 'ИНН объекта',
    license_number: 'Номер лицензии',
    license_expiry: 'Истечение срока лицензии:',
    date: 'Дата',
    object_type: 'Тип объекта',
    location: 'Местоположение',
    total_mining_volume: 'Общий объем добычи',
    minerals: 'Минералы',
    
    // Object types
    object_type_1: 'Тип 1',
    object_type_2: 'Тип 2',
    object_type_3: 'Тип 3',
    
    // Calculate
    calculate_title: 'Вычисление с помощью аэрокосмического мониторинга:',
    initial_map: '2024:',
    upload_map: 'Загрузить новую карту:',
    uploaded_map: '2025:',
    difference_map: 'Вычисленная карта:',
    upload_file: 'Загрузить файл',
    format_archive: 'Формат файла .ZIP / .RAR',
    file_absent: 'Файл отсутствует',
    loading_message: 'Загрузка...',
    no_files: 'Нет доступных файлов',
    file_not_available: 'Файл не доступен',
    
    // Stats
    aerospace_monitoring: 'Аэрокосмический мониторинг',
    tax_information: 'Налоговая информация',
    total_sum: 'Общая сумма',
    calculated_difference: 'Вычисленная разница',
    unknown: 'Неизвестно',
    
    // Volumes
    volumes_results_title: 'Результаты расчёта объёмов',
    volumes_licensed_and_adjacent: 'Лицензионный участок и прилегающая территория',
    volumes_licensed_area: 'Лицензионный участок',
    volumes_beyond_boundary: 'Выход за границу лицензионного участка',
    volumes_excavation: 'Выемка',
    volumes_embankment: 'Насыпь',
    volumes_info_modal_title: 'Объём выемки',
    volumes_info_modal_description: 'Объём выемки внутри лицензионного участка рассчитывается по спутниковым данным. На карте показаны границы лицензионной территории и зоны изменений рельефа.',
    information: 'Информация',
    
    // Upload Snackbar
    uploading: 'Загрузка...',
    upload_successful: 'Загрузка успешна',
    upload_error: 'Ошибка загрузки',
    reload: 'Перезагрузить',
    
    // Stats
    monitoring: 'Мониторинг',
    mining_name: 'Добыча',
    overall_name: 'Итого',
    difference_name: 'Разница',
    
    // Volumes
    volumes_title: 'Объёмы',
    volumes_section_intersection: 'Пересечение',
    volumes_section_aoi: 'AOI',
    volumes_section_delta: 'Дельта',
    cut: 'Выемка',
    fill: 'Насыпь',
    volumes_info_title: 'Информация об объёмах',
    volumes_info_text: 'Информация о расчёте объёмов',
    
    // Visualization
    visualization_load_error: 'Ошибка загрузки визуализации',
    visualization_unavailable: 'Визуализация недоступна',
    visualization_downloading: 'Скачивание...',
    visualization_download_error: 'Ошибка скачивания',
    
    // Docs
    uploading_files: 'Загрузка файлов...',
    docs_date: 'Дата:',
    
    // Delete
    delete_title: 'Удаление данных',
    delete_text: 'Вы действительно хотите удалить данные расчёта?',
    
    // Unauthorized
    access_denied: 'Доступ запрещен',
    access_denied_message: 'У вас нет доступа к этому контенту. Пожалуйста, войдите в систему, чтобы продолжить.',
    possible_reasons: 'Возможные причины:',
    not_authorized: 'Вы не авторизованы в системе',
    session_expired: 'Ваша сессия истекла',
    insufficient_rights: 'У вас недостаточно прав для просмотра',
    object_id_not_found: 'ID объекта не найден в localStorage (ключ: "attribute-id")',
    object_not_found: 'Объект не найден',
  },
  
  // Buttons
  buttons: {
    download: 'Скачать',
    upload: 'Загрузить',
    calculate: 'Расчитать и Сохранить',
    calculating: 'Обработка...',
    cancel: 'Отмена',
    delete: 'Удалить',
    close: 'Закрыть',
    download_html: 'Скачать HTML',
  },
  
  // Snackbar
  snackbar: {
    downloading_start: 'Загрузка начата',
    downloading_progress: 'Загружено: {loadedMB} МБ',
    download_success: 'Загрузка завершена',
    download_error: 'Ошибка загрузки',
    download_canceled: 'Загрузка отменена',
    upload_canceled: 'Загрузка отменена',
    error_common: 'Произошла ошибка',
    error_token: 'Отсутствует токен аутентификации',
  },
  
  // Steps
  steps: {
    step_0: 'Проверка не проведена',
    step_1: 'Проверка проведена',
    step_2: 'Согласование с уполномоченным органом',
    step_3: 'Проверка субъекта предпринимательства',
    step_4: 'Сформление акта',
  },
  
  unknown: 'Неизвестно',
};

