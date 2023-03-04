<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text" />
    <xsl:include href="message.xsl" />

    <xsl:template match="user">
    <xsl:text>{</xsl:text>
    
            <xsl:text>"id": </xsl:text>
            <xsl:value-of select="@id" />
            <xsl:text>,</xsl:text>
            
            <xsl:text>"username": "</xsl:text>
            <xsl:value-of select="username" />
            <xsl:text>",</xsl:text>
            
            <xsl:text>"handle": "</xsl:text>
            <xsl:value-of select="handle" />
            <xsl:text>",</xsl:text>
            
            <xsl:text>"email": "</xsl:text>
            <xsl:value-of select="email" />
            <xsl:text>",</xsl:text>
            
            <xsl:text>"password": "</xsl:text>
            <xsl:value-of select="password" />
            <xsl:text>",</xsl:text>
            
            <xsl:text>"messages": [</xsl:text>
            <xsl:apply-templates select="messages/message" />
            <xsl:text>]</xsl:text>
            
        <xsl:text>}</xsl:text>
        <xsl:if test="position() != last()">
            <xsl:text>,</xsl:text>
        </xsl:if>
    </xsl:template>

</xsl:stylesheet>