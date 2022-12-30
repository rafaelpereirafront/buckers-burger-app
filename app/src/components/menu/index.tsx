import { FlatList, TouchableOpacity } from "react-native";
import { formatCurrency } from "../../utils/formatCurrency";
import { CategoriesList as products } from "../categories/mok";
import { PlusCircle } from "../Icons/PlusCircle";
import { Text } from "../Text";
import {Product, ProductImage, ProductDetails, Grid, AddToCartButton} from "./styles";

export function Menu (){
return (
  <FlatList
    data={products}
    style={{marginTop: 32 }}
    contentContainerStyle={{paddingHorizontal: 24 }}
    keyExtractor={product => product._id}
    ItemSeparatorComponent={Grid}
    renderItem={({ item: product}) => (
      <Product>
        <ProductImage
          source={{uri:`http://localhost:3000/uploados/${product.imagePath}`}}
        />
        <ProductDetails>
          <Text weight="600">{product.name}</Text>
          <Text size={14} color='#666' style={{ marginVertical: 8 }}>{product.descritption}</Text>
          <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
        </ProductDetails>
        <AddToCartButton>
          <PlusCircle/>
        </AddToCartButton>
      </Product>
    )}/>
)
}