import { View, TouchableOpacity, Text} from "react-native";
import { s } from "./styles"

export function Continue() {
  return (
    <View>  
      <TouchableOpacity style={s.btn}>
        <Text style={s.text}>Começar</Text>
      </TouchableOpacity>
    </View>
  )
}