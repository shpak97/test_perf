# Tables Components

Модульная система компонентов таблиц с оптимизацией производительности.

## Структура

```
tables/
├── index.ts                 # Главный экспорт всех компонентов
├── Table.tsx               # Основной компонент таблицы
├── Thead.tsx              # Заголовок таблицы
├── Tbody.tsx              # Тело таблицы
├── cells/                 # Компоненты ячеек
│   ├── index.ts          # Экспорт всех ячеек
│   ├── ActionsCell.tsx   # Действия (Edit/Delete)
│   ├── BadgeCell.tsx     # Badge компоненты
│   ├── ImageLinkCell.tsx # Картинка + текст + ссылка
│   ├── LinkCell.tsx      # Простые ссылки
│   ├── TextCell.tsx      # Простой текст
│   └── TheadCell.tsx     # Ячейка заголовка
└── rows/                 # Компоненты строк
    ├── index.ts          # Экспорт всех строк
    ├── OrganisationRow.tsx # Строка организации
    └── TheadRow.tsx      # Строка заголовка
```

## Использование

### Базовое использование

```tsx
import { Table } from '@/components/tables'

import type { IOrganization } from '@/types/organization.types'

;<Table<IOrganization>
	theadData={tableColumns}
	tbodyData={organizationsData}
	renderRow={renderOrganisationRow}
/>
```

### Использование отдельных компонентов

```tsx
import { ActionsCell, ImageLinkCell, TextCell } from '@/components/tables'

// В строке таблицы
<ImageLinkCell
  href="/organization/1"
  imageSrc="/logo.png"
  imageAlt="Logo"
  text="Organization Name"
  imageClassName="rounded"
/>

<TextCell className="capitalize">
  Moderator
</TextCell>

<ActionsCell
  onEdit={handleEdit}
  onDelete={handleDelete}
  editLabel="Edit organization"
  deleteLabel="Delete organization"
/>
```

## Оптимизация

### React.memo

Все компоненты оптимизированы с `React.memo` для предотвращения ненужных ре-рендеров:

- ✅ Table
- ✅ Thead / Tbody
- ✅ TheadRow / TheadCell
- ✅ Все Cell компоненты
- ✅ OrganisationRow (уже был с memo)

### Типизация

- Все компоненты полностью типизированы с TypeScript
- Использование дженериков для гибкости
- Интерфейсы с префиксом `I`

### Импорты

- Бочкообразные экспорты через index.ts файлы
- Оптимизированные импорты в компонентах
- Уменьшение количества отдельных импортов

## Создание новых компонентов

### Новая ячейка

1. Создать компонент в `cells/`
2. Добавить memo оптимизацию
3. Экспортировать в `cells/index.ts`

### Новая строка

1. Создать компонент в `rows/`
2. Использовать существующие cell компоненты
3. Экспортировать в `rows/index.ts`
