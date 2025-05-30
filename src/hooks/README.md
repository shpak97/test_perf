# Hooks

## useSearch

Простий та гнучкий хук для пошуку на фронтенді після отримання всіх даних з сервера.

### Особливості

- ✅ Працює з будь-якими типами даних
- ✅ Підтримка вкладених полів (наприклад, `owner.firstName`)
- ✅ Дебаунсинг для оптимізації
- ✅ Показує стан завантаження під час пошуку
- ✅ Повна типізація TypeScript

### Використання

#### Базове використання

```tsx
import useSearch from '@/hooks/useSearch'

const { filteredData, setSearchQuery, resultCount, totalCount } = useSearch({
	data: organizations,
	searchFields: ['name'] // пошук тільки по назві
})
```

#### Пошук по кількох полях

```tsx
const { filteredData, setSearchQuery } = useSearch({
	data: organizations,
	searchFields: ['name', 'role', 'owner.firstName', 'owner.lastName']
})
```

#### З кастомним дебаунсингом

```tsx
const { filteredData, setSearchQuery, isSearching } = useSearch({
	data: users,
	searchFields: ['email', 'profile.name'],
	delay: 500 // затримка 500мс
})
```

### Параметри

- `data: T[]` - Масив даних для пошуку
- `searchFields: Array<keyof T | string>` - Поля для пошуку. Можна використовувати крапку для
  вкладених полів
- `delay?: number` - Затримка дебаунсинга в мілісекундах (за замовчуванням 300)

### Повертає

- `searchQuery: string` - Поточний пошуковий запит (без дебаунсинга)
- `debouncedQuery: string` - Дебаунсований пошуковий запит
- `setSearchQuery: (query: string) => void` - Функція для оновлення пошукового запиту
- `filteredData: T[]` - Відфільтровані дані
- `resultCount: number` - Кількість знайдених результатів
- `totalCount: number` - Загальна кількість елементів
- `isSearching: boolean` - Чи відбувається пошук (є різниця між `searchQuery` та `debouncedQuery`)

### Приклади для різних таблиць

#### OrganisationsTable

```tsx
// Структура даних: { name, owner: { firstName, lastName }, role }
const { filteredData } = useSearch({
	data: organisationsTable.rows,
	searchFields: ['name', 'owner.firstName', 'owner.lastName', 'role']
})
```

#### UsersTable

```tsx
// Структура даних: { email, profile: { name, company } }
const { filteredData } = useSearch({
	data: usersTable.rows,
	searchFields: ['email', 'profile.name', 'profile.company']
})
```

#### ProjectsTable

```tsx
// Структура даних: { title, description, author: { name } }
const { filteredData } = useSearch({
	data: projectsTable.rows,
	searchFields: ['title', 'description', 'author.name']
})
```

### Інтеграція з компонентами

#### З InputSearch

```tsx
const Component = () => {
	const [inputValue, setInputValue] = useState('')
	const { filteredData, setSearchQuery, debouncedQuery, resultCount, totalCount, isSearching } =
		useSearch({
			data: items,
			searchFields: ['name']
		})

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setInputValue(value)
		setSearchQuery(value)
	}

	const handleSearchReset = () => {
		setInputValue('')
		setSearchQuery('')
	}

	return (
		<>
			<InputSearch
				placeholder='Search...'
				value={inputValue}
				onChange={handleSearchChange}
				onReset={handleSearchReset}
			/>
			{debouncedQuery && (
				<span>
					({resultCount} з {totalCount}){isSearching && <span>...</span>}
				</span>
			)}
			<Table data={filteredData} />
		</>
	)
}
```

### Переваги

1. **Простота** - мінімальний API, легко використовувати
2. **Гнучкість** - працює з будь-якими структурами даних
3. **Продуктивність** - дебаунсинг запобігає зайвим обчисленням
4. **UX** - показує стан завантаження та кількість результатів
5. **Типобезпека** - повна підтримка TypeScript
