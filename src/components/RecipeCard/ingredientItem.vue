<template>
<li>{{ingredientParsed}} {{serving}}</li>
</template>

<script>
export default {
    props:{
        ingredient:{
            type:String
        },
        serving:{
            type:Number
        }
    },
    computed:{
        ingredientParsed(){
// let arr = this.ingredient.split('/')

// arr.forEach(e=> e.isInteger())
return this.ingredient
        }
    }
}
</script>