# Search Components

Окремі компоненти для пошуку з покращеною функціональністю.

## SearchFilter

Самостійний компонент пошуку, що працює з мінімальною кількістю символів та підтримує всі типи
полів.

### Особливості

- ✅ **Мінімум 1 символ** - пошук починається від першого символа
- ✅ **Швидкий відгук** - дебаунсинг 200мс
- ✅ **Вкладені поля** - підтримка `owner.firstName`, `profile.company`
- ✅ **Callback-паттерн** - передає результати через props
- ✅ **Повна ізоляція** - не залежить від батьківського компонента

### Використання

#### Базове використання

```tsx
import { SearchFilter } from '@/components/search'

const [filteredData, setFilteredData] = useState(originalData)
const [searchMetrics, setSearchMetrics] = useState({
	resultCount: originalData.length,
	totalCount: originalData.length,
	isSearching: false
})

<SearchFilter<IOrganization>
	data={originalData}
	searchFields={['name', 'owner.firstName', 'owner.lastName']}
	onFilteredData={setFilteredData}
	onMetricsChange={setSearchMetrics}
	placeholder="Search organizations..."
	minSearchLength={1}
/>

<Table
	tbodyData={filteredData}
	searchMetrics={searchMetrics}
/>
```

#### Повний приклад з callbackами

```tsx
const handleFilteredData = useCallback((data: IOrganization[]) => {
	setFilteredData(data)
	// Додаткова логіка при зміні даних
}, [])

const handleMetricsChange = useCallback((metrics) => {
	setSearchMetrics(metrics)
	// Логіка обробки метрик
	console.log(`Found ${metrics.resultCount} of ${metrics.totalCount}`)
}, [])

<SearchFilter<IOrganization>
	data={organizationsData}
	searchFields={[
		'name',             // назва організації
		'owner.firstName',  // ім'я власника
		'owner.lastName',   // прізвище власника
		'owner.email',      // email власника
		'role'             // роль
	]}
	onFilteredData={handleFilteredData}
	onMetricsChange={handleMetricsChange}
	placeholder='Search by name, owner, role, email...'
	className='w-[540px]'
	minSearchLength={1}
/>
```

### Props

- `data: T[]` - Масив даних для пошуку
- `searchFields: Array<keyof T | string>` - Поля для пошуку (підтримка вкладених)
- `onFilteredData: (data: T[]) => void` - Callback з відфільтрованими даними
- `onMetricsChange: (metrics) => void` - Callback з метриками пошуку
- `placeholder?: string` - Placeholder для input (за замовчуванням "Search...")
- `className?: string` - CSS класи (за замовчуванням "w-[540px]")
- `minSearchLength?: number` - Мінімальна кількість символів (за замовчуванням 1)

### Метрики

Компонент передає через `onMetricsChange`:

```tsx
{
	resultCount: number,    // кількість знайдених результатів
	totalCount: number,     // загальна кількість елементів
	isSearching: boolean    // чи відбувається пошук (дебаунсинг)
}
```

### Переваги над попереднім підходом

#### 1. **Повна ізоляція**

- Компонент управляє своїм станом
- Не залежить від логіки батьківського компонента
- Легко переносити між компонентами

#### 2. **Швидший відгук**

- Дебаунсинг 200мс замість 300мс
- Пошук з першого символа
- Миттєвий візуальний відгук

#### 3. **Краща підтримка полів**

```tsx
// Тепер працюють всі поля:
searchFields: [
	'name', // ✅ назва
	'owner.firstName', // ✅ ім'я власника
	'owner.lastName', // ✅ прізвище
	'owner.email', // ✅ email
	'role' // ✅ роль
]
```

#### 4. **Гнучкість інтеграції**

```tsx
// Легко додати до будь-якої таблиці
<SearchFilter<IUser>
	data={users}
	searchFields={['email', 'profile.name']}
	onFilteredData={setFilteredUsers}
	onMetricsChange={setUserMetrics}
/>
```

### Приклади для різних таблиць

#### OrganisationsTable

```tsx
searchFields: ['name', 'owner.firstName', 'owner.lastName', 'owner.email', 'role']
```

#### UsersTable

```tsx
searchFields: ['email', 'firstName', 'lastName', 'role']
```

#### ProjectsTable

```tsx
searchFields: ['title', 'description', 'author.firstName', 'author.email']
```

### Інтеграція з Table

```tsx
// Автоматичні метрики в Table
<Table
	tbodyData={filteredData}
	searchMetrics={searchMetrics} // передаємо метрики
/>

// Table автоматично показує:
// "Showing 5 of 25" - при фільтрації
// "Showing 25 results" - всі результати
// "Showing 3 of 25 (searching...)" - під час пошуку
```

## Міграція з попереднього підходу

### Було:

```tsx
const { filteredData, setSearchQuery, resultCount, totalCount, isSearching } = useSearch({
	data: organizationsData,
	searchFields: ['name', 'owner.firstName', 'owner.lastName', 'role']
})

<InputSearch value={inputValue} onChange={handleSearchChange} />
<Table tbodyData={filteredData} searchMetrics={{ resultCount, totalCount, isSearching }} />
```

### Стало:

```tsx
const [filteredData, setFilteredData] = useState(organizationsData)
const [searchMetrics, setSearchMetrics] = useState({...})

<SearchFilter
	data={organizationsData}
	searchFields={['name', 'owner.firstName', 'owner.lastName', 'role']}
	onFilteredData={setFilteredData}
	onMetricsChange={setSearchMetrics}
/>
<Table tbodyData={filteredData} searchMetrics={searchMetrics} />
```

Простіше, чистіше, більше можливостей! 🚀
