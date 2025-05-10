import YelpSearchForm from '@/components/YelpFoodSearchForm';

export default function FoodPage() {
  return (
    <main>
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>🍽️ Search for Food</h1>
      <YelpSearchForm />
    </main>
  );
}
