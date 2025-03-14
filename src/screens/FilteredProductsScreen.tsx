import React, {useContext} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {ProductsContext} from '../contexts/ProductsContext';
import {ThemeContext} from '../contexts/ThemeContext';
import {Product} from '../data/types';
import getFormattedPriceParts from '../utils/getFormattedPriceParts';

const FilteredProductsScreen = ({route, navigation}: any) => {
  const {categoryId} = route.params;
  const {products} = useContext(ProductsContext);
  const {colors} = useContext(ThemeContext);

  // Фильтруем товары по `categoryId`
  const filteredProducts = products.filter(p => p.categoryId === categoryId);

  const renderItem = ({item}: {item: Product}) => (
    <TouchableOpacity
      style={[
        styles.card,
        {backgroundColor: colors.background, borderColor: colors.button},
      ]}
      onPress={() => navigation.navigate('ProductDetail', {product: item})}
      activeOpacity={0.8}>
      <Image
        source={{uri: item.image || 'https://via.placeholder.com/150'}}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={[styles.cardTitle, {color: colors.text}]}>
          {item.name}
        </Text>
        {/* Используем `getFormattedPriceParts` */}
        {getFormattedPriceParts(item.price, item.discount)}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {filteredProducts.length === 0 ? (
        <Text style={[styles.emptyText, {color: colors.text}]}>
          Нет товаров в данной категории
        </Text>
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  listContainer: {paddingBottom: 20},
  card: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2, // Android
    shadowColor: '#000', // iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  cardImage: {width: '100%', height: 150},
  cardContent: {padding: 10},
  cardTitle: {fontSize: 18, fontWeight: 'bold', marginBottom: 5},
  emptyText: {fontSize: 16, textAlign: 'center', marginTop: 20},
});

export default FilteredProductsScreen;
