package com.github.masx200.leetcode_test.utils

import kotlin.reflect.KClass
import kotlin.reflect.KFunction
import kotlin.reflect.full.declaredFunctions
import kotlin.reflect.jvm.jvmName

fun runScript(commands: List<String>, inputs: ArrayList<ArrayList<Any>>, classes: KClass<*>): List<Any?> {
//    println(commands)
//    println(inputs)
//    println(classes)
    val kFunction = classes.constructors.first()
    if (kFunction.parameters.size != inputs[0].size) throw Error("constructor parameters mismatch")
//    println(kFunction.parameters)
    val instance = kFunction.call(*Array(inputs[0].size) { inputs[0][it] })
    val res = List<Any?>(commands.size) { null }.toMutableList()
    val methodMap = hashMapOf<String, KFunction<*>>()
    for (fu in classes.declaredFunctions) {

        methodMap[fu.name] = fu
    }
//    println(instance)
    for ((i, arg) in inputs.withIndex()) {
        if (i != 0) {
            val name = commands[i]
            val fu = methodMap[name] ?: throw Error("method not found")
//            (fu.parameters).forEach(::println)
//            println(arg[0].javaClass)

            for (j in arg.indices) {
                if (arg[j].javaClass != (fu.parameters[j + 1].type.classifier) as KClass<*>) {
                    val jvmName = (fu.parameters[j + 1].type.classifier as KClass<*>).jvmName
                    val old = arg[j]
                    if (old is Number) {
                        arg[j] = when (jvmName) {
                            "int" -> old.toInt()
                            "double" -> old.toDouble()
                            "float" -> old.toFloat()
                            "long" -> old.toLong()
                            "char" -> old.toChar()
                            "short" -> old.toShort()
                            "byte" -> old.toByte()
                            else -> {
                                throw Error("error number type:" + jvmName)
                            }
                        }
                    }
//                    println(arg[j].javaClass.name)

//                    println(jvmName)

//                    println(arg[j] is Number)
                }
            }

            val re = fu.call(instance, *Array(arg.size) { arg[it] })

            if (re == Unit) {
                res[i] = null
            } else {
                res[i] = re
            }
        }

    }

    return res
}