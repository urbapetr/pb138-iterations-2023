<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text" />
    <xsl:include href="message.xsl" />

    <xsl:template match="user">
    {    
            "id": <xsl:value-of select="@id" />,            
            "username": "<xsl:value-of select="username" />",            
            "handle": "<xsl:value-of select="handle" />",            
            "email": "<xsl:value-of select="email" />",            
            "password": "<xsl:value-of select="password" />",            
            "messages": [<xsl:apply-templates select="messages/message" />]            
        }
        <xsl:if test="position() != last()">
            ,
        </xsl:if>
    </xsl:template>

</xsl:stylesheet>